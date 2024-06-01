// godot --doctool --gdscript-docs .

const fs = require("fs")
const path = require("path")
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const bbConvert = require('bbcode-to-markdown');

const apiPath = "../content/docs/api"
const apiURLBase = "/docs/api/"

// Clear Docs
for (const fpath of fs.readdirSync(apiPath)) {
    if (fpath.endsWith(".md") && fpath != "_index.md") {
        fs.rmSync(path.resolve(apiPath, fpath))
    }
}

function makeIcon(className) {
    if (className.startsWith("MP") || className.startsWith("MultiPlay") || className.endsWith("NetProtocol")) {
        return `<img src="/icons/${className}.svg" class="class-icon" alt="">`
    } else {
        return `<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/${className}.svg" class="class-icon" alt="">`
    }
}

function makeClassLink(className, putIcon = true) {
    if (className == "void") {
        return ""
    }

    if (className.startsWith("MP") || className.startsWith("MultiPlay") || className.endsWith("NetProtocol")) {
        return `${putIcon ? `${makeIcon(`${className}`)} ` : ""}[\`${className}\`](${apiURLBase}${className})`
    } else {
        return `${putIcon ? `${makeIcon(`${className}`)} ` : ""}[\`${className}\`](https://docs.godotengine.org/en/stable/classes/class_${className.toLowerCase()}.html)`
    }
}

function formatText(str) {
    if (!str || str == "") {
        return null
    }

    return bbConvert(str)
}

function makeClassLinkHTML(className, putIcon = true) {
    if (className == "void") {
        return ""
    }
    if (className.startsWith("MP") || className.startsWith("MultiPlay") || className.endsWith("NetProtocol")) {
        return `${putIcon ? `${makeIcon(`${className}`)} ` : ""}<a href="${apiURLBase}${className}"><code>${className}</code></a>`
    } else {
        return `${putIcon ? `${makeIcon(`${className}`)} ` : ""}<a href="https://docs.godotengine.org/en/stable/classes/class_${className.toLowerCase()}.html"><code>${className}</code></a>`
    }
}

setTimeout(() => {
    for (const fpath of fs.readdirSync("./docs")) {
        const fileContent = fs.readFileSync(path.resolve("./docs", fpath))

        const parser = new XMLParser({
            ignoreAttributes: false
        });
        let obj = parser.parse(fileContent);

        if (obj.class["@_inherits"].startsWith("MP") || obj.class["@_name"].startsWith("MP")) {
            const className = obj.class["@_name"]
            const inherits = obj.class["@_inherits"]

            // Create property table
            let propertyTable = `| Type | Name | Default |\n|---|---|---|\n`

            let propertyDesc = ``

            if (obj.class.members) {

                if (Symbol.iterator in Object(obj.class.members.member)) {
                    for (const m of obj.class.members.member) {
                        // Igore private variables
                        if (m["@_name"].startsWith("_")) {
                            continue
                        }
                        propertyTable += `|${makeClassLink(m["@_type"] ?? "Variant")}|[${m["@_name"]}](${apiURLBase}${className}#${m["@_name"].toLowerCase()})|${m["@_default"] ?? ""}|\n`

                        propertyDesc += `<h3 class="property-title" id="${m["@_name"].toLowerCase()}"> ${makeClassLinkHTML(m["@_type"] ?? "Variant")} ${m["@_name"]} </h3>\n\n`
                        propertyDesc += `- Default: \`${m["@_default"] ?? "none"}\`\n\n`
                        propertyDesc += `\n\n${formatText(m["#text"]) ?? "There's currently no description for this property."}`
                        propertyDesc += `\n\n---\n`
                    }
                }
            }

            // Create method table
            let methodTable = `| Returns Type | Syntax |\n|---|---|\n`

            let methodDesc = ``

            if (obj.class.methods) {

                if (Symbol.iterator in Object(obj.class.methods.method)) {
                    for (const m of obj.class.methods.method) {
                        // Igore private variables
                        if (m["@_name"].startsWith("_")) {
                            continue
                        }

                        let paramString = " "
                        let paramStringDesc = " "

                        if (Symbol.iterator in Object(m.param)) {

                            for (const p of m.param) {
                                paramString += `${makeClassLinkHTML(p["@_type"])} ${p["@_name"]}, `
                                paramStringDesc += `${makeClassLinkHTML(p["@_type"], false)} <span class="method-arg">${p["@_name"]}</span>, `
                            }

                            // remove last colon
                            paramString = paramString.slice(0, -2) + " "
                            paramStringDesc = paramStringDesc.slice(0, -2) + " "
                        }

                        methodTable += `|${makeClassLink(m.return["@_type"]) ?? "void"}|[${m["@_name"]}](${apiURLBase}${className}#${m["@_name"].toLowerCase()}) (${paramString})|\n`

                        methodDesc += `<h3 class="property-title" id="${m["@_name"].toLowerCase()}"> ${makeClassLinkHTML(m.return["@_type"] ?? "Variant")} ${m["@_name"]} (${paramStringDesc}) </h3>\n\n`

                        methodDesc += `\n\n${formatText(m["description"]) ?? "There's currently no description for this method."}`
                        methodDesc += `\n\n---\n`
                        /*

                        propertyTable += `|${m["@_type"] ?? "Variant"}|[${m["@_name"]}](/docs/api/${className}#${m["@_type"]?.toLowerCase() ?? "variant"}-${m["@_name"].toLowerCase()})|${m["@_default"] ?? ""}|\n`

                        propertyDesc += `### \`${m["@_type"] ?? "Variant"}\` ${m["@_name"]}\n\n`
                        propertyDesc += `- Default: \`${m["@_default"] ?? "none"}\`\n\n`
                        propertyDesc += `\n\n${m["#text"] ?? "There's currently no description for this property."}`
                        propertyDesc += `\n\n---\n`

                        */
                    }
                }
            }

            let signalsDesc = ``

            if (obj.class.signals) {
                for (const s of obj.class.signals.signal) {
                    let paramStringDesc = " "

                    if (Symbol.iterator in Object(s.param)) {

                        for (const p of s.param) {
                            paramStringDesc += `${makeClassLinkHTML(p["@_type"], false)} <span class="method-arg">${p["@_name"]}</span>, `
                        }

                        // remove last colon
                        paramStringDesc = paramStringDesc.slice(0, -2) + " "
                    }

                    signalsDesc += `<h3 class="property-title"> ${s["@_name"]} (${paramStringDesc}) </h3>\n\n`

                    signalsDesc += `\n\n${formatText(s["description"]) ?? "There's currently no description for this signal."}`
                    signalsDesc += `\n\n---\n`
                }
            }

            let enumDesc = ``
            const enums = {}

            if (obj.class.constants) {

                for (const c of obj.class.constants.constant) {
                    if (c["@_enum"]) {
                        if (!enums[c["@_enum"]]) {
                            enums[c["@_enum"]] = []
                        }

                        enums[c["@_enum"]].push(c)
                    }
                }

            }

            for (const [k,v] of Object.entries(enums)) {
                enumDesc += `<h3 class="property-title"> enum ${k}: </h3>\n\n`

                for (const e of v) {

                    console.log(e)

                    enumDesc += `- ${e["@_name"]} = ${e["@_value"]}\n`
                    enumDesc += `\n\n${formatText(e["#text"]) ?? "There's currently no description for this enum."}`
                    enumDesc += `\n\n---\n`

                }
            }

            let mdContent = `---\ntitle: ${className}\n---
    
# API: ${className}

**Inherits:** ${makeClassLink(inherits)}

{{< class_icon "${className}" >}} ${bbConvert(obj.class.brief_description)}

${bbConvert(obj.class.description)}

## Properties

${propertyTable}

## Methods

${methodTable}

${enumDesc.length > 0 ? "## Enumerations" : ""}

${enumDesc}

${propertyDesc.length > 0 ? "## Property Descriptions" : ""}

${propertyDesc}

${methodDesc.length > 0 ? "## Method Descriptions" : ""}

${methodDesc}

${signalsDesc.length > 0 ? "## Signals" : ""}

${signalsDesc}`

            fs.writeFileSync(path.resolve(apiPath, `${className}.md`), mdContent)

            //console.log(obj)
        }
    }
}, 400);
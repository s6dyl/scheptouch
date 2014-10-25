
// N2O Simple Template

function template(html, data) { // template("{this.name}",{name:"Maxim"})
    var re = /{([^}]+)?}/g, code = 'var r=[];', cursor = 0;
    var add = function(line,js) {
        js? (code += 'r.push(' + line + ');') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");' : ''); // "
        return add; }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1],true);
        cursor = match.index + match[0].length; }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data); }

function xml(html) { return new DOMParser().parseFromString(html, "application/xhtml+xml").firstChild; }
function dom(html) {
    var dom =  new DOMParser().parseFromString(html, "text/html")
              .firstChild.getElementsByTagName("body")[0].firstChild; return dom; }

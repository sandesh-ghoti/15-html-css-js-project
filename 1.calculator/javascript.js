let input = document.getElementById("exp");
let output = document.getElementById("output");
let buttons = document.querySelectorAll("button");
let expression = "";
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const val = e.target.innerHTML;
        try {
            if (val == "=") {
                let result = eval(input.value);
                output.innerHTML = result;
            } else if (val == "AC") {
                expression = "";
                output.innerHTML = "";
            } else if (val == "Del") {
                // expression = expression.substring(0, expression.length - 1);
                expression = expression.slice(0, -1);
            } else if (val == "( )") {
                if (
                    expression.indexOf("(") == -1 ||
                    (expression.indexOf("(") != -1 &&
                        expression.indexOf("(") != -1 &&
                        expression.lastIndexOf("(") <
                            expression.lastIndexOf(")"))
                ) {
                    expression += "(";
                }
                // else add )
                else {
                    expression += ")";
                }
            } else {
                expression += val;
            }
            // show expression on input element
            input.value = expression;
        } catch (e) {
            console.log(e);
        }
    });
});

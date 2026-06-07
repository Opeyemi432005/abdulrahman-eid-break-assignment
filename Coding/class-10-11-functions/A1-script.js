
    
        // ==================== PURE FUNCTIONS ====================
        const add = (a, b) => a + b;
        const subtract = (a, b) => a - b;
        const multiply = (a, b) => a * b;
        const divide = (a, b) => {
            if (b === 0) throw new Error("Cannot divide by zero");
            return a / b;
        };
        const power = (a, b) => Math.pow(a, b);
        const sqrt = (a) => {
            if (a < 0) throw new Error("Cannot calculate square root of negative number");
            return Math.sqrt(a);
        };
        const factorial = (n) => {
            if (n < 0 || !Number.isInteger(n)) throw new Error("Factorial only for non-negative integers");
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        };

        // Higher-order function for operation selection
        const getOperation = (operator) => {
            const operations = {
                '+': add,
                '-': subtract,
                '*': multiply,
                '/': divide,
                '^': power
            };
            return operations[operator];
        };

        // ==================== STATE ====================
        let state = {
            currentInput: "0",
            previousValue: null,
            operator: null,
            expression: "",
            shouldResetDisplay: false
        };

        const display = document.getElementById('display');
        const expressionEl = document.getElementById('expression');

        function updateDisplay() {
            display.textContent = state.currentInput;
            expressionEl.textContent = state.expression;
        }

        // ==================== INPUT HANDLERS ====================
        function inputNumber(num) {
            if (state.shouldResetDisplay) {
                state.currentInput = num;
                state.shouldResetDisplay = false;
            } else {
                state.currentInput = state.currentInput === "0" ? num : state.currentInput + num;
            }
            updateDisplay();
        }

        function inputDecimal() {
            if (state.shouldResetDisplay) {
                state.currentInput = "0.";
                state.shouldResetDisplay = false;
            } else if (!state.currentInput.includes('.')) {
                state.currentInput += '.';
            }
            updateDisplay();
        }

        function inputOperator(op) {
            const currentValue = parseFloat(state.currentInput);

            // If we have a pending operation, calculate it first (chaining)
            if (state.operator && state.previousValue !== null && !state.shouldResetDisplay) {
                calculate();
            }

            state.previousValue = currentValue;
            state.operator = op;
            state.shouldResetDisplay = true;
            
            const displayOp = op === '*' ? '×' : op === '/' ? '÷' : op;
            state.expression = `${currentValue} ${displayOp}`;
            
            updateDisplay();
        }

        function handleScientific(type) {
            let value = parseFloat(state.currentInput);
            let result;

            try {
                if (type === 'sqrt') {
                    result = sqrt(value);
                    state.expression = `√(${value})`;
                } 
                else if (type === 'pow') {
                    // Treat power as binary operator
                    state.previousValue = value;
                    state.operator = '^';
                    state.shouldResetDisplay = true;
                    state.expression = `${value} ^`;
                    updateDisplay();
                    return;
                } 
                else if (type === 'fact') {
                    result = factorial(Math.floor(value));
                    state.expression = `${value}!`;
                }

                state.currentInput = result.toString();
                state.shouldResetDisplay = true;
                updateDisplay();
            } catch (err) {
                showError(err.message);
            }
        }

        function calculate() {
            if (!state.operator || state.previousValue === null) return;

            const current = parseFloat(state.currentInput);
            let result;

            try {
                const operation = getOperation(state.operator);
                if (!operation) return;

                result = operation(state.previousValue, current);

                state.currentInput = Number.isInteger(result) 
                    ? result.toString() 
                    : parseFloat(result.toFixed(8)).toString();

                const displayOp = state.operator === '*' ? '×' : state.operator === '/' ? '÷' : state.operator;
                state.expression = `${state.previousValue} ${displayOp} ${current} =`;
            } catch (err) {
                showError(err.message);
                return;
            }

            // Reset for next calculation
            state.previousValue = null;
            state.operator = null;
            state.shouldResetDisplay = true;
            updateDisplay();
        }

        function calculateResult() {
            calculate();
        }

        // ==================== UTILITIES ====================
        function toggleSign() {
            if (state.currentInput === "0") return;
            state.currentInput = state.currentInput.startsWith('-') 
                ? state.currentInput.substring(1) 
                : '-' + state.currentInput;
            updateDisplay();
        }

        function backspace() {
            if (state.shouldResetDisplay) return;
            if (state.currentInput.length <= 1) {
                state.currentInput = "0";
            } else {
                state.currentInput = state.currentInput.slice(0, -1);
            }
            updateDisplay();
        }

        function clearEntry() {
            state.currentInput = "0";
            updateDisplay();
        }

        function clearAll() {
            state = {
                currentInput: "0",
                previousValue: null,
                operator: null,
                expression: "",
                shouldResetDisplay: false
            };
            updateDisplay();
        }

        function showError(message) {
            display.textContent = message;
            setTimeout(() => {
                clearAll();
            }, 1600);
        }

        // ==================== KEYBOARD SUPPORT ====================
        document.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9') inputNumber(e.key);
            if (e.key === '.') inputDecimal();
            if (['+', '-', '*', '/'].includes(e.key)) inputOperator(e.key);
            if (e.key === 'Enter' || e.key === '=') calculateResult();
            if (e.key === 'Backspace') backspace();
            if (e.key === 'Escape') clearAll();
        });

        // Initialize
        window.onload = () => updateDisplay();
    
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <div class="calculator">
    <input type="text" id="result" placeholder="0" readonly>

    <div class="buttons">
      <div class="button" onclick="appendValue('7')">7</div>
      <div class="button" onclick="appendValue('8')">8</div>
      <div class="button" onclick="appendValue('9')">9</div>
      <div class="button operator" onclick="appendValue('/')">/</div>

      <div class="button" onclick="appendValue('4')">4</div>
      <div class="button" onclick="appendValue('5')">5</div>
      <div class="button" onclick="appendValue('6')">6</div>
      <div class="button operator" onclick="appendValue('*')">*</div>

      <div class="button" onclick="appendValue('1')">1</div>
      <div class="button" onclick="appendValue('2')">2</div>
      <div class="button" onclick="appendValue('3')">3</div>
      <div class="button operator" onclick="appendValue('-')">-</div>

      <div class="button" onclick="appendValue('0')">0</div>
      <div class="button" onclick="appendValue('.')">.</div>
      <div class="button clear" onclick="clearResult()">C</div>
      <div class="button operator" onclick="appendValue('+')">+</div>

      <div class="button equal" onclick="calculateResult()">=</div>
    </div>
  </div>

  <script src="scripts/app.js"></script>
</body>
</html>

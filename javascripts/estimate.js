childProcess = require('child_process')
function applyOperation(number1, number2, operator, brain) {
  if (brain === 'linear' || brain === 'SVC' || brain === 'NN') {
    command = 'calcuMLator/compute.py '+number1+' \''+operator+'\' '+number2+' '+brain+' 2>/dev/null'
    calculation = Number(childProcess.execSync(command).toString());
    return  Number(calculation.toFixed(6)).toString();
  } else {
    return  Number(eval(number1.concat(operator, number2)).toFixed(6)).toString();
  }
}

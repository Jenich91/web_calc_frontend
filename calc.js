const btn_delete = document.getElementById('btn_delete');
const btn_reset = document.getElementById('btn_reset');
const expressionField = document.getElementById('expressionField');
const X_value = document.getElementById('X_value');

function getButtonText(src_btn) {
  return src_btn.innerHTML;
}

document
  .querySelectorAll('.btn_num, .btn_operator, .btn_func, .btn_etc')
  .forEach((button) => {
    let btn_value = button.firstElementChild.firstElementChild;

    if (button === btn_reset)
      button.onclick = function () {
        expressionField.value = '';
      };
    else
      button.onclick = function () {
        const myInsertText = getButtonText(btn_value);
        expressionField.value += myInsertText.replace(/ /g, '');
      };
  });

$('#btn_delete').on('click', function () {
  var textVal = $('#expressionField').val();
  $('#expressionField').val(textVal.substring(0, textVal.length - 1));
});

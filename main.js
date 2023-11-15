$(document).ready(function() {

    $('ul').on('change', 'input[type="checkbox"]', function() {
        const label = $(this).next('label');
        if (this.checked) {
            label.addClass('completed');
        } else {
            label.removeClass('completed');
        }
    });

    $(`header button`).click(function() {
        $(`.form`).slideDown();
    })
    $(`#btn-cancelar`).click(function() {
        $(`.form`).slideUp();
    })
    
    $(`form`).on(`submit`, function(e) {
        e.preventDefault();
        
        const descTarefa = $(`#desc-tarefa`).val();
        if (descTarefa !== '') {
            const novoLi = $(`
            <li>
            <input name="tarefa1" type="checkbox" >
            <label for="tarefa1">${descTarefa}</label>
            </li>
            `);
            $(`ul`).append(novoLi);
        }else {
            alert("Escreva uma tarefa");
        }

        $(`#desc-tarefa`).val(``);
    })
})
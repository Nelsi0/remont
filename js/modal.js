const modalData = [
    {
        title: 'Связаться с нами',
        subtitle: 'Опишите вашу проблему и мы свяжемся с вами',
        content: `
            <form class="flex_row form form_modal">
                <div class="flex_column form_column">
                    <input type="text" class="btn btn_input" placeholder="Имя">
                    <input type="tel" class="btn btn_input" placeholder="Телефон">
                    <textarea class="btn btn_input" placeholder="Опишите проблему"></textarea>
                </div>
                <div class="flex_column form_column">
                    <select class="btn btn_input">
                        <option value="0">Модель устройства</option>
                        <option value="1">Pixel 4a 5G</option>
                    </select>
                    <div class="btn_input file_input">
                        Прикрепите фото 
                        <input type="file">
                    </div>
                    <button type="submit" class="btn btn_input btn_blue btn_full_blue">Отправить заявку</button>
                </div>
            </form>`
    },
    {
        title: 'Запись на ремонт',
        subtitle: 'Напишите модель вашего устройства и опишите вашу проблему. Мы постараемся вам помочь!',
        content: `
            <form class="form flex_column form_modal" style="gap: 15px;">
                    <input type="text" class="btn btn_input" placeholder="Имя">
                    <input type="tel" class="btn btn_input" placeholder="Телефон">
                    <textarea class="btn btn_input" placeholder="Пожелания"></textarea>
                    <button type="submit" class="btn btn_input btn_blue btn_full_blue">Отправить заявку</button>
            </form>`
    },
    {
        title: 'Остались вопросы?',
        subtitle: 'Задайте их нашему специалисту',
        content: `
            <form class="form form_modal flex_column" style="gap: 15px;>
                    <input type="text" class="btn btn_input" placeholder="Имя">
                    <input type="tel" class="btn btn_input" placeholder="Телефон">
                    <textarea class="btn btn_input" placeholder="Ваш вопрос"></textarea>
                    <button type="submit" class="btn btn_input btn_blue btn_full_blue">Отправить заявку</button>

            </form>`
    },
];

function openModal(index) {
    const data = modalData[index];
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalTitle').querySelector('h2').textContent = data.title;
    document.getElementById('modalTitle').querySelector('p').textContent = data.subtitle;
    document.getElementById('modalBody').innerHTML = data.content;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}
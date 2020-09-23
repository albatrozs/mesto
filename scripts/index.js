
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popupSaveButton = document.querySelector('.popup__button');
// Находим форму в DOM
let formElement = document.querySelector('.popup__input-container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__item_job');// Воспользуйтесь инструментом .querySelector()
    

let popupToggle = function () {
    if (!popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__job').textContent;
    } else{
        popup.classList.remove('popup_opened')
    }
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Выберите элементы, куда должны быть вставлены значения полей
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened')
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
popupSaveButton.addEventListener('click', popupToggle);

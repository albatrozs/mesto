
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.js-profile__open-popup');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popupSaveButton = document.querySelector('.popup__button')

let popupToggle = function () {
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

// Находим форму в DOM
let formElement = document.querySelector('.popup__input-container');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__name-input');// Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__job-input');// Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    nameInput=nameInput.value;
    jobInput=jobInput.value;
    
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name')
    let profileJob = document.querySelector('.profile__job')

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileJob.textContent = jobInput;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
popupSaveButton.addEventListener('click', formSubmitHandler);
popupSaveButton.addEventListener('click', popupToggle);




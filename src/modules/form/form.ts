const sendData = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });

    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки: ${response.status}`);
    }
    return await response.json();
};

function validation(form): boolean {
    
    function removeError(input): void {
        const parent = input.parentNode;
        
        if (parent.classList.contains('form__input-box_error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('form__input-box_error');
        };
    };
    
    function createError(input, text: string): void {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;

        parent.classList.add('form__input-box_error');

        parent.append(errorLabel);
    };

    let result: boolean = true;

    // Checking for empty fields and maximum number of symbols

    const allInputs = form.querySelectorAll('.form__input');

    for (const input of allInputs) {
        
        removeError(input);

        if (input.dataset.maxLength) {
            removeError(input);

            if (input.value.length > input.dataset.maxLength) {                
                createError(input, `Maximum number of symbols: ${input.dataset.maxLength}`);
                result = false;
            };
        };     

        if (input.value == "") {
            createError(input, 'The field is not filled!');
            result = false;
        };
    };

    return result;
}

// Sending request

const formMessage: any = document.getElementById('add-form');

formMessage.addEventListener('submit', e => {
    e.preventDefault();

    if (validation(formMessage) == true) {
        const formData = new FormData(formMessage);

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(name))
            .then(() => {                                            
            })
            .catch((err) => {
                console.log(err)
            });
        
        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(email))
            .then(() => {                                             
            })
            .catch((err) => {
                console.log(err)
            });

        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(message))
            .then(() => {
                alert('Thank you! Data has been sent successfully!');
                formMessage.reset();                                              
            })
            .catch((err) => {
                console.log(err)
            });
        };
})
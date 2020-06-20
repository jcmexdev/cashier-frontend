export const showFeedBack = (errors) => {
    cleanFeedBack();
    for (const key in errors) {
        document.querySelector(`#${key}`).nextSibling.textContent = errors[key]; 
    }
}

const cleanFeedBack = () => {
    document.querySelectorAll('input').forEach(input => {
        if(input.nextSibling != null) {
            input.nextSibling.textContent = '';
        }
    })
}
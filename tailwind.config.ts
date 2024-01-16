/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend:{
            aspectRatio:{
                '[2/1]': '2 / 1',
                '[5/3]': '5 / 3',
                '[1/1]': '1 / 1',
            }
        }
    },
    darkMode: 'class'
}
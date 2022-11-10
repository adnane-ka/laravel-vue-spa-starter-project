/**
 * @param {string} mode 
 * @return void
 */
export function changeMode(mode){
    localStorage.setItem('mode' ,mode)

    setMode(mode)
}

/**
 * set a given mode or default 
 * 
 * @param {string} mode 
 * @return void
 */
export function setMode(mode = null){
    mode = mode ?? activeMode

    const target = document.querySelector('#app-container').classList
    
    mode == 'dark' ? target.add('dark') : target.remove('dark')
}

/**
 * @return string
*/
export var activeMode = localStorage.getItem('mode') ?? 'light'
const element = React.createElement;

function LikeButton() {
    return element('button', {
        onClick: () => alert('Berhasil')
    }, 'Like')
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(element(LikeButton), domContainer)
function customRender(a,b){
//     const domElement = document.createElement(reactElement.type )
//     domElement.innerHTML= reactElement.childern;
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//    b.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if (prop == "childern") continue;
        domElement.setAttribute(prop , reactElement.props[prop])

        }
        b.appendChild(domElement)
    }
    


const reactElement = {
    type : 'a',
    props :{
        href : "hhtps://gooogle.com",
        target : '_blank'
    },
    childern : 'click me to visit google'
}



const mainCont = document.querySelector("#root")

customRender(reactElement , mainCont)
function addClass(node,className){
  if(typeof node ==='string') node = getNode(node);

  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두번재 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.add(className);
}


function removeClass(node,className){
  if(typeof node ==='string') node = getNode(node);

  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두번재 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.remove(className);
}

function toggleClass(node,className){
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string')
    typeError('toggleClass 함수의 두번째 인자는 문자 타입 이어야 합니다.');
  
  node.classList.toggle(className);
}




function getCss(node,prop){
  if(typeof node === 'string')
    node = getNode(node);
  
  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop]
}

console.log(getCss('.first','font-size'));

function setCss(node,prop,value){
  if(typeof node === 'string')
    node = getNode(node);
  
  if(!(prop in document.body.style)){
    syntaxError('setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value){
    syntaxError('setCss 함수의 세번째 인자는 필수값 입니다.')
  }

  node.style[prop] = value;
}


const css = (node,prop,value) => {
  return !value ? getCss(node,prop) : setCss(node,prop,value)
}
/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red';
console.log( first.style.fontSize );

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`




// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 x 
// [ ] 각괄호 표기법 

// 대상에게 속성을 받아서 이 속성 값이 뭐야~?  라는걸 보여줘야함.




css('.first','font-size','100px'); // set
css('.first','font-size'); // get
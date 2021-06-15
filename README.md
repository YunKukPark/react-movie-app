# react-movie-app
hello react! (첫 리액트 프로젝트)

React JS Fundamentals Course

## How does React work?
> **nodemodule, public, src**  

> React : Element 생성하여 HTML 에 집어 넣는다.

### **render**  
1. App.js 에서 다음과 같이 입력한다.
```javascript
function App() {
  return <div> Hello!!!! </div>
}

export default App;
```

2. index.js 에서 render 한다. 
```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```

3. Render 된 요소는 `getElementById || querySelector` 에 해당하는 요소를 찾아가 해당요소의 자식으로 **push** 된다.


> 즉, react 는 소스코드에 처음부터 HTML을 넣지 않고, HTML 에서 HTML을 추가하거나 제거한다.  
> Render 가 먼저 빈 HTML 을 불러오고 react 가 HTML 을 밀어넣게 되므로, **Client Side Rendering** 이다.

### **Component**
> What is Component?
> > React 에서 component는 **HTML을 반환**하는 함수.

**Component 기본 규칙**
- react application는 한 번에 하나의 component만을 rendering 해야함.

> 그럼 Component 를 만든 이후에는 어떻게 해야 하나요??
> > App.js 의 function에 많은 component 를 넣을 수 있고, 또 이러한 component 안에 더 많은 component를 import 할 수 있다.


### **JSX** : javascript 안의 HTML

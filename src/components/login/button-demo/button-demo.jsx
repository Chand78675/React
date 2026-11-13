
export function ButtonDemo(){
   function handleDoubleClick()
 {
  window.open('c-3.jpeg','Mobile','width=400,height=400');
 }
 function handleContextMenu()
 {
    document.oncontextmenu = function(){
        alert('Right Clicked is not allowed');
        return false;
    }
 }
 return(
    <div onContextMenu={handleContextMenu} className="container-fluid">
        <h2>Button Events</h2>
        <img onDoubleClick={handleDoubleClick} src="c-3.jpeg" width="150" height="150"/>
        <p>Double Click to View Large</p>
    </div>
 )
}
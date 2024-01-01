function NavBar() {
  let mylist = ["orange", "apple", "banana", "berry"];
  return (
    <>
      <h1>clicking button</h1>

      <ul>
        {mylist.map((fruit) => (
          <li onClick={(hi) => clicking(fruit, hi)} key={fruit}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}
function clicking(fruit, hi) {
  console.log(hi);
  console.log("button clicked " + fruit);
}
raf;

export default NavBar;

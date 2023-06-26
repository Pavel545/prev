import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { todosSelector } from "../../stor/selectors";

export function Header({ child, filter, prints }) {
  const data = useSelector(todosSelector);
  return (
    <header
      style={{ justifyContent: child ? "space-between" : "space-around" }}
      className="header"
    >
      <Link to="/" className="logo">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/Logo.svg"}
          alt=""
        />
      </Link>
      {child ? (
        <img
          onClick={() => Print(prints, data.specific[0].name)}
          className="header_print"
          src={process.env.PUBLIC_URL + "/print.svg"}
          alt=""
        />
      ) : (
        <div className="search">
          <input
            onChange={(event) => filter(event.target.value)}
            className="search_failed"
            type="text"
          />
          <img
            className="search_img"
            src={process.env.PUBLIC_URL + "/search.svg"}
            alt=""
          />
        </div>
      )}
    </header>
  );
}
function Print(print, name) {
  // var printWindow = window.open('1', 'Print Window','height=400,width=600');
  // printWindow.document.write('<html><head><title>AGATECH   Согласованно____________</title> ');
  // printWindow.document.write('</head><body style=" margin: 0;padding: 0;"><img style="height:auto; width:100%;" src=');
  // printWindow.document.write(print);
  // printWindow.document.write(' /></body></html>');
  // printWindow.document.close();
  // printWindow.print();
  var printWindow = window.open(
    "1",
    name,
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  );
  printWindow.document.write(Mel(print, name));
  printWindow.document.close();
  printWindow.print();
}
function Mel(params, name) {
  return `
    <!DOCTYPE html> 
    <html lang="ru"> 
    <head> 
    <meta charset="UTF-8"> 
    <title>Печать проекта - ${name}</title>
    <link rel="stylesheet" type="text/css" href="css/print.css">
    </head> 
    <body style=" margin: 0; padding: 0; "> 
    <div style="width:100%;height: 50px;">
        <img style="max-width:100%;" src="/header-IP.png" alt="AGATECH DIGITAL AGENCY - 432045, г. Ульяновск, ул. Рябикова, д.4, 2 этаж">
    </div>
    <div style="max-height:850px; max-width:100%;  text-align: center; padding-top:20px;
        box-sizing: border-box;">
        <img style="max-height:100%;
        max-width:100%;" src=${params} alt="Макет">
    </div>
    
    </body> 
    </html>
    
    `;
}

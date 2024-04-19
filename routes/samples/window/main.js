import { vi_WindowFormater} from '/libs/vizor/viOne/view/vi_window_formater.js';
 
const windowFormater = new vi_WindowFormater();


 // Formatea div de objetos para que sea una ventana :
 windowFormater.formatWindow("#objects_menu","Sucursales",500,350);
 windowFormater.positionDiv("objects_menu",10,50);

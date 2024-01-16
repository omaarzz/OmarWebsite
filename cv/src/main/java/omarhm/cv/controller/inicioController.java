package omarhm.cv.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class inicioController {
    @RequestMapping("/")
    public String inicio(){
        return "index";
    } 
    @RequestMapping("/Acerca")
     public String acerca(){
        return "index";
    } 
    @RequestMapping("/Experiencia")
     public String experiencia(){
        return "experiencia";
    } 

    @RequestMapping("/Educacion")
     public String educacion(){
        return "educacion";
    } 

    @RequestMapping("/Habilidades")
     public String habilidades(){
        return "habilidades";
    } 

    @RequestMapping("/Contacto")
     public String contacto(){
        return "contacto";
    } 
}

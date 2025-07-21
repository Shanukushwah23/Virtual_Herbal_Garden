/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Shanu
 */
@WebServlet(urlPatterns = {"/Register"})
public class Register extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter(); 
        try{
            String name=request.getParameter("name");
            String email=request.getParameter("mail");
            String mobile=request.getParameter("mobile");
            String gender=request.getParameter("shanu");
            String state=request.getParameter("stt");
            String city=request.getParameter("city");
            String password=request.getParameter("pwd");
            
            
            
            
            //load the driver class
         Class.forName("com.mysql.cj.jdbc.Driver");
      //Create connection
      
      Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/Virtual_Herbal_Garden","root","");
      //make PrepaedStatement object
             PreparedStatement ps=cn.prepareStatement("insert into Herbal_Garden(name,email,mobile_no, gender,state,city,password)values(?,?,?,?,?,?,?)");
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setString(3, mobile);
            ps.setString(4, gender);
            ps.setString(5, state);
            ps.setString(6, city);
            ps.setString(7, password);
            
            //Execute the query
           
      boolean b=ps.execute();
         if(b==false)
         {
             out.println("<h2>Registration success</h2>")
                     ; 
             RequestDispatcher rd=request.getRequestDispatcher("Login.html");
         rd.include(request, response);
         }
            cn.close(); 
        }
        catch(Exception e)
                {
                    out.println(e.getMessage());
            
        }
                
    }
   
    

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
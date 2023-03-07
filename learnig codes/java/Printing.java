import java.util.Scanner;

class Printing{
  public static void main(String[] args) {
   
   Scanner myObj = new Scanner(System.in);
    String userName;
	String userAge;
	String userLoc;
	String userStudy;
	
	 System.out.println("Enter username"); 
     userName = myObj.nextLine(); 
	 
	 System.out.println("Enter age"); 
	 userAge = myObj.nextLine();
	 
	 System.out.println("Enter location"); 
	 userLoc = myObj.nextLine(); 
	 
	 System.out.println("Enter study"); 
	 userStudy = myObj.nextLine(); 
       
	 System.out.println("User name is: " + userName);     
	 System.out.println("User age is: " + userAge);     
	 System.out.println("User location is: " + userLoc);     
	 System.out.println("User study is: " + userStudy);     
 
  }
}

              
public class  TestEncapsulation { 
 
public static void main(String[] args) {  
    
    Account acc = new Account();  
	acc.setName("jose bush");  
	acc.setAmount(5000);  
    
    System.out.println(acc.getName()+" "+acc.getAmount());  
}  
}  
public class Recursion{
	static int count = 0;
	static void repeat(){
		
		count++;
		
		
		if(count<=5000){
		System.out.println("hello bro " +count);
		repeat();
	}
}
	public static void main(String[] args) {  
	repeat();
	}  
}
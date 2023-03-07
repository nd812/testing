public class StaticPublic{
	
	static void staticMethod(){
		System.out.println("this is Static method");
	}
	
	public void publicMethod(){
		System.out.println("this is public method");
	}
	
	
	public static void main(String[] args){
		staticMethod();
		
		StaticPublic myObj = new StaticPublic();
		myObj.publicMethod();
	}

}
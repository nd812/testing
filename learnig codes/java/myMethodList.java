public class myMethodList{

	static void myMethod(){
		int a = 10;
		int b = 20;
		System.out.println(a + b);
		System.out.println(a - b);
	}
	
	public void myMethod1(){
		int a = 30;
		int b = 30;
		System.out.println(a + b);
		System.out.println(a - b);
	}
	
	public static void main(String[] args){
		myMethod();
		
		myMethodList myObj = new myMethodList();
		myObj.myMethod1();
		
	}
}
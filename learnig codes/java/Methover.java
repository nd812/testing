public class Methover{
	
	static int myMethod3(int x, int a){
		return a + x;
	}
	
	static double myMethod3(double x, double a){
		return a + x;
	}
		
	public static void main(String[] args){
			
		int myNum1 = myMethod3(8, 5);
		double myNum2 = myMethod3(4.3, 6.26);

		System.out.println("int: " + myNum1);
		System.out.println("double: " + myNum2);
	}
}
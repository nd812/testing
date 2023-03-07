public class OperatorTest{
	public static void main(String[] args){
		
		int nikhil = 23;
		int hardik = 22;
		int jigar = 21;
		int parag = 23;
		boolean isIt = false; 
		
		//arethmetic operator
		System.out.println("arethmetic operator");
		System.out.println(nikhil + hardik);
		System.out.println(nikhil - hardik);
		System.out.println(nikhil * hardik);
		System.out.println(nikhil / hardik);
		System.out.println(nikhil % hardik);
		
		//unery operator
		System.out.println("unery operator");
		System.out.println(++nikhil);
		System.out.println(nikhil++);
		System.out.println(--nikhil);
		System.out.println(nikhil--);
		System.out.println(~nikhil);
		System.out.println(!isIt);
		 
		//Shift Operator
		System.out.println("Shift Operator");
		System.out.println(10<<2);
		System.out.println(10>>2);
		
		//Logical && and Bitwise &
		System.out.println("Logical && and Bitwise &");
		System.out.println(nikhil > parag&&nikhil > jigar);
		System.out.println(nikhil > parag&nikhil > jigar);
		System.out.println(nikhil<jigar&&nikhil++<parag);
		
		//Ternary Operator 
		System.out.println("Ternary Operator");
		System.out.println((nikhil<jigar)?nikhil:jigar);
		
		//Assignment Operator 
		System.out.println("Assignment Operator ");
		System.out.println(nikhil+=2);
		System.out.println(nikhil-=2);
		System.out.println(nikhil*=2);
		System.out.println(nikhil%=2);
		System.out.println(nikhil==2);
	}
}
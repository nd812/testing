public class Main{
	
	public void Cardesinged(){
		System.out.println("car is desinged by carol selby in 1969");
	}
	
	public void Carmodel(String model){
		System.out.println("car model was " + model);
	}
	
	
	public static void main(String[] args){
		
		Main myCar = new Main();
		
		myCar.Cardesinged();
		myCar.Carmodel("mustang");
		
	}
}
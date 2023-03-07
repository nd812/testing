class Vehicle{
	protected String brand = "Ford"; 
	public void honk(){
	System.out.println("whroom  whrooom  wwwhhhooooommmmmmm");
	}
}

class Car extends Vehicle{
	private String modelName = "cobra selby mustang";
	public static void main(String[] args) {
		Car myObj = new Car();
		myObj.honk();
		System.out.println(myObj.brand +" " +myObj.modelName);
	}
}



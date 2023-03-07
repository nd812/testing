class Animal {
	public void animals(){
	System.out.println("that's my boy");
	}
}
class pig extends Animal{
	public void animals(){
	System.out.println("do not tell anyone");
	}
}
class dog extends Animal{
	public void animals(){
	System.out.println("hello budy");
	}
}

class ghudkhar{
	public static void main(String[] args){
	Animal myAni = new Animal();
	Animal myPig = new pig();
	Animal myDog = new dog();
	
	myAni.animals();
	myDog.animals();
	myPig.animals();
	}
}
 
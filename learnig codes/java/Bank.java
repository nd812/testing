class Bank{  

	void getRateOfInterest(){
		System.out.println("Rate of Interest: 1 ");  
		}  
	}  
  
class SBI extends Bank{  

	void getRateOfInterest(){
		System.out.println("SBI Rate of Interest: 2 ");  
		}  
	}  
   
class ICICI extends Bank{  

	void getRateOfInterest(){
	System.out.println("ICICI Rate of Interest: 3 ");
		}  
	}  
class AXIS extends Bank{  

	void getRateOfInterest(){
		System.out.println("AXIS Rate of Interest: 4 ");  
		}  
	}  

class Test2{  

	public static void main(String args[]){  
		Bank  b = new Bank();
		SBI   s = new SBI();  
		ICICI i = new ICICI();  
		AXIS  a = new AXIS();  
		
		b.getRateOfInterest();
		s.getRateOfInterest();
		i.getRateOfInterest();
		a.getRateOfInterest();
	}  
}  
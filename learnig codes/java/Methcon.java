class Methcon{  
    void Animal(){
        System.out.println("animal is created");
    }  
}  
class TestSuper3{  
    public static void main(String args[]){  
        Methcon myMeth = new Methcon();  
        myMeth.Animal();  
    }  
}
public class pangram{
    public static void main(String[] args) {
        String input = "nature is a beautiful"; 
        
        boolean isPangram = isPangram(input.toLowerCase()); 
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26]; 
        
        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabet[index] = true;
            }
        }
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false; 
            }
        }
        
        return true; 
    }
}
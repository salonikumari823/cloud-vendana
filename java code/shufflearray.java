import java.util.Random;

public class shufflearray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};

        shuffleArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] arr) {
        Random rand = new Random();
        int n = arr.length;
        
        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

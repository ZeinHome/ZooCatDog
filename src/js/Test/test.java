import java.util.*;

/*
Напиши метод public int[] leavePrice9(int[] prices),
который возвратит массив из тех цен, которые оканчиваются на цифру 9. Не изменяй порядок оставшихся цен.
 */

public class UberShop {

    public void printPrices(float[] prices) {
        for(float price: prices) {
            System.out.println(price + " jup.");
        }
    }
 
    public void multiplyPrices(float[] prices) {
        for(int i = 0; i < prices.length; i++) {
            float price = prices[i];

            if (price < 1000) {
                price *= 2f;
            } else {
                price *= 1.5f;
            }

            prices[i] = price;
        }
    }

    public int[] findMinMaxPrices(int[] prices) {
        if (prices.length == 0) {
            return new int[0];
        }

        int min = prices[0];
        int max = prices[0];

        for(int price: prices) {
            if (price > max) {
                max = price;
            }

            if (price < min) {
                min = price;
            }
        }

        if (min == max) {
            return new int[] {min};
        }

        return new int[] {min, max};
    }

    public int getMinPriceCount(int[] prices) {
        if (prices.length == 0) {
            return 0;
        }

        int min = prices[0];
        for(int i = 0; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i];
            }
        }

        int result = 0;
        for(int i = 0; i < prices.length; i++) {
            if (prices[i] == min) {
                result++;
            }
        }

        return result;
    }

    public int[] removePrice(int[] prices, int toRemove) {
        int toRemoveCount = 0;
        for(int price: prices) {
            if (price == toRemove) {
                toRemoveCount++;
            }
        }

        int[] result = new int[prices.length - toRemoveCount];
        int index = 0;
        for(int price: prices) {
            if (price != toRemove) {
                result[index] = price;
                index++;
            }
        }

        return result;

        public int[] leavePrice9(int[] prices){
            for(int i = 0, i < prices.length, i++){
                price = prices[i];
                if (number % 10 == 9)
            }
        }
    }


        public static void main(String[] args) {
        UberShop shop = new UberShop();

        //Should be [1599, 399]
        int[] prices = new int[] {399, 1599, 399, 50, 10, 10, 70};
        System.out.println(Arrays.toString(shop.leavePrice9(prices)));
    }
}
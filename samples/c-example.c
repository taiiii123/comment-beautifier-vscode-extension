#include <stdio.h>
#include <stdlib.h>

// ヘッダーインクルードの
    // コメントは
  // このように揃います

/* グローバル定数の
 * コメントも
   * このように
 * 揃えられます
 */
#define MAX_SIZE 100

// グローバル変数の
    // コメントは
  // このように揃います
static int globalVar;

// 構造体定義の
    // コメントも
  // 揃えられます
struct Example {
    // 構造体メンバーの
        // コメントも
      // 揃います
    int id;
    char name[50];
};

/* 関数プロトタイプの
 * コメントも
   * このように
 * 揃えられます
 */
void processData(int data[], int size);
int calculateSum(int a, int b);

int main(void) {
    // メイン関数内の
        // コメントは
      // このように揃います

    int localVar;
    // 変数宣言の
        // コメントも
      // 揃います

    /* 配列操作の
     * コメントも
       * このように
     * 揃えられます
     */
    int array[MAX_SIZE];

    for (int i = 0; i < MAX_SIZE; i++) {
        // ループ内の
          // コメントも
        // 揃えられます
        array[i] = i;
    }

    return 0;
}

// 関数定義の
    // コメントは
  // このように揃います
void processData(int data[], int size) {
    // 関数内の
        // コメントも
      // 揃えられます

    if (size > 0) {
        /* 条件分岐内の
         * コメントも
           * このように
         * 揃います
         */
        data[0] = 0;
    }
}

int calculateSum(int a, int b) {
    // 計算関数内の
        // コメントも
      // きれいに揃います
    return a + b;
}

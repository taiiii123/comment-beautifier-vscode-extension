// モジュールの
    // コメントは
  // このように揃います
use std::{sync::{Arc, Mutex}, thread};

/* トレイトの
 * コメントも
   * このように
 * 揃えられます
 */
pub trait ExampleTrait {
    fn do_something(&self) -> Result<(), String>;
}

/// 構造体のドキュメントコメントは
/// このように書きます
#[derive(Debug, Clone)]
pub struct RustExample {
    // フィールドの
        // コメントは
      // このように揃います
    name: String,
    value: i32,
    // スマートポインタの
        // コメントも
      // 揃えられます
    data: Arc<Mutex<Vec<i32>>>,
}

impl RustExample {
    // コンストラクタの
        // コメントは
      // このように揃います
    pub fn new(name: String) -> Self {
        // 初期化の
            // コメントも
          // 揃えられます
        Self {
            name,
            value: 0,
            data: Arc::new(Mutex::new(Vec::new())),
        }
    }

    /* パブリックメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    pub fn process_data(&mut self) -> Result<(), String> {
        // エラー処理の
            // コメントは
          // このように揃います
        let data = self.data.lock().map_err(|e| e.to_string())?;

        // マッチ式の
            // コメントも
          // 揃えられます
        match self.value {
            0 => {
                // マッチアームの
                    // コメントも
                  // 揃います
                Ok(())
            }
            _ => Err("Invalid value".to_string()),
        }
    }

    // 非同期メソッドの
        // コメントは
      // このように揃います
    pub async fn async_operation(&self) {
        // 非同期処理の
            // コメントも
          // 揃えられます
        tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
    }

    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    fn helper_method(&self) {
        // イテレータの
            // コメントは
          // このように揃います
        let numbers = vec![1, 2, 3];
        numbers.iter().for_each(|n| {
            // クロージャ内の
                // コメントも
              // 揃えられます
            println!("{}", n);
        });
    }
}

// トレイト実装の
    // コメントは
  // このように揃います
impl ExampleTrait for RustExample {
    fn do_something(&self) -> Result<(), String> {
        // スレッド処理の
            // コメントも
          // 揃えられます
        let data = Arc::clone(&self.data);
        thread::spawn(move || {
            // スレッド内の
                // コメントも
              // 揃えられます
            let mut data = data.lock().unwrap();
            data.push(42);
        });

        Ok(())
    }
}

// テスト用の
    // コメントは
  // このように揃います
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example() {
        // テストケースの
            // コメントも
          // 揃えられます
        let example = RustExample::new("test".to_string());
        assert!(example.do_something().is_ok());
    }
}

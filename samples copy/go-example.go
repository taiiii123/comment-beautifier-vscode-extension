package main

import (
    "fmt"
    "sync"
)

// 構造体の
    // コメントは
  // このように揃います
type Example struct {
    Name  string // 名前
    Value int            // 値
    mu    sync.Mutex // ミューテックス
}

// コンストラクタの
    // コメントは
  // このように揃います
func NewExample(name string, value int) *Example {
    return &Example{
        Name:  name,  // 名前を設定
        Value: value, // 値を設定
    }
}

// メソッドの
    // コメントは
  // このように揃います
func (e *Example) UpdateValue(newValue int) {
    e.mu.Lock()   // ミューテックスをロック
    defer e.mu.Unlock() // 処理後にアンロック

    e.Value = newValue // 値を更新
}

// メイン関数の
    // コメントは
  // このように揃います
func main() {
    example := NewExample("Test", 42) // インスタンスを作成

    fmt.Println("Before Update:", example.Value) // 更新前の値を出力

    example.UpdateValue(100) // 値を更新

    fmt.Println("After Update:", example.Value) // 更新後の値を出力
}

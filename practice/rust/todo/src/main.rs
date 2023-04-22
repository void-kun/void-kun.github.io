use std::io::{stdin, stdout, Write};

fn main() {
    let stdin = stdin();
    let stdout = stdout();
    let mut stdout = stdout.lock();

    loop {
        stdout.flush().unwrap();
        let mut line = String::new();
        stdin.read_line(&mut line).unwrap();
        let line = line.trim();
        if line.is_empty() {
            continue;
        }
        if line.starts_with('q') {
            break;
        }
        if line.starts_with(' ') {
            stdout.write_all(line.as_bytes()).unwrap();
        }
    }
}

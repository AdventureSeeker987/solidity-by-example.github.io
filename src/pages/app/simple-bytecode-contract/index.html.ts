// metadata
export const version = "0.8.13"
export const title = "Simple Bytecode Contract"
export const description = "Simple example of contract written in bytecode"
export const codes = [
    {
        fileName: "Factory.sol",
        code: "cHJhZ21hIHNvbGlkaXR5IF4wLjguMTM7Cgpjb250cmFjdCBGYWN0b3J5IHsKICAgIGV2ZW50IExvZyhhZGRyZXNzIGFkZHIpOwoKICAgIC8vIERlcGxveXMgYSBjb250cmFjdCB0aGF0IGFsd2F5cyByZXR1cm5zIDQyCiAgICBmdW5jdGlvbiBkZXBsb3koKSBleHRlcm5hbCB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGJ5dGVjb2RlID0gaGV4IjY5NjAyYTYwMDA1MjYwMjA2MDAwZjM2MDAwNTI2MDBhNjAxNmYzIjsKICAgICAgICBhZGRyZXNzIGFkZHI7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBjcmVhdGUodmFsdWUsIG9mZnNldCwgc2l6ZSkKICAgICAgICAgICAgYWRkciA6PSBjcmVhdGUoMCwgYWRkKGJ5dGVjb2RlLCAweDIwKSwgMHgxNikKICAgICAgICB9CiAgICAgICAgcmVxdWlyZShhZGRyICE9IGFkZHJlc3MoMCkpOwoKICAgICAgICBlbWl0IExvZyhhZGRyKTsKICAgIH0KfQoKaW50ZXJmYWNlIElDb250cmFjdCB7CiAgICBmdW5jdGlvbiBnZXRNZWFuaW5nT2ZMaWZlKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKfQoKLy8gaHR0cHM6Ly93d3cuZXZtLmNvZGVzL3BsYXlncm91bmQKLyoKUnVuIHRpbWUgY29kZSAtIHJldHVybiA0Mgo2MDJhNjAwMDUyNjAyMDYwMDBmMwoKLy8gU3RvcmUgNDIgdG8gbWVtb3J5ClBVU0gxIDB4MmEKUFVTSDEgMApNU1RPUkUKCi8vIFJldHVybiAzMiBieXRlcyBmcm9tIG1lbW9yeQpQVVNIMSAweDIwClBVU0gxIDAKUkVUVVJOCgpDcmVhdGlvbiBjb2RlIC0gcmV0dXJuIHJ1bnRpbWUgY29kZQo2OTYwMmE2MDAwNTI2MDIwNjAwMGYzNjAwMDUyNjAwYTYwMTZmMwoKLy8gU3RvcmUgcnVuIHRpbWUgY29kZSB0byBtZW1vcnkKUFVTSDEwIDBYNjAyYTYwMDA1MjYwMjA2MDAwZjMKUFVTSDEgMApNU1RPUkUKCi8vIFJldHVybiAxMCBieXRlcyBmcm9tIG1lbW9yeSBzdGFydGluZyBhdCBvZmZzZXQgMjIKUFVTSDEgMHgwYQpQVVNIMSAweDE2ClJFVFVSTgoqLwo=",
    },
]

const html = `<p>Simple example of contract written in bytecode</p>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>)</span>;

    <span class="hljs-comment">// Deploys a contract that always returns 42</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-string">hex"69602a60005260206000f3600052600a6016f3"</span>;
        <span class="hljs-keyword">address</span> addr;
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// create(value, offset, size)</span>
            addr <span class="hljs-operator">:=</span> <span class="hljs-built_in">create</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">add</span>(bytecode, <span class="hljs-number">0x20</span>), <span class="hljs-number">0x16</span>)
        }
        <span class="hljs-built_in">require</span>(addr <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>));

        <span class="hljs-keyword">emit</span> Log(addr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IContract</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMeaningOfLife</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;
}

<span class="hljs-comment">// https://www.evm.codes/playground</span>
<span class="hljs-comment">/*
Run time code - return 42
602a60005260206000f3

// Store 42 to memory
PUSH1 0x2a
PUSH1 0
MSTORE

// Return 32 bytes from memory
PUSH1 0x20
PUSH1 0
RETURN

Creation code - return runtime code
69602a60005260206000f3600052600a6016f3

// Store run time code to memory
PUSH10 0X602a60005260206000f3
PUSH1 0
MSTORE

// Return 10 bytes from memory starting at offset 22
PUSH1 0x0a
PUSH1 0x16
RETURN
*/</span>
</code></pre>
`

export default html

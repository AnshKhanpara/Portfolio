# AES-128 Cryptographic Engine (Encryption & Decryption)

A synthesizable, area-optimized 128-bit AES (Advanced Encryption Standard) engine implemented in Verilog. This project features an **iterative architecture** designed to provide a balanced trade-off between hardware resource utilization and processing throughput.

## Technical Highlights
- **Algorithm**: AES-128 (NIST FIPS 197 compliant).
- **Architecture**: Iterative loop-based design (Round module reuse).
- **Performance**: Achieved **400 MHz** clock frequency on FPGA targets.
- **Resource Efficiency**: Optimized for low LUT/Gate count (~4300 LUTs).
- **Latency**: 10 clock cycles per 128-bit block (including pre-round).

## Architecture Details
The engine implements the full AES-128 transformation suite:
1. **Key Expansion**: Generates 11 round keys (44 words) from the 128-bit master key.
2. **SubBytes**: Non-linear byte substitution using an S-Box lookup table.
3. **ShiftRows**: Cyclic shift of state matrix rows for diffusion.
4. **MixColumns**: Matrix multiplication in GF(2^8) for further diffusion.
5. **AddRoundKey**: Bitwise XOR of the state with the round key.

### Iterative Design Choice
Unlike fully unrolled or pipelined designs, this implementation reuses the `ROUNDS` module across multiple clock cycles. This significantly reduces the silicon area and power consumption, making it ideal for embedded systems and IoT security modules.

## Repository Structure
```text
├── rtl/
│   ├── aes_top.v         # Top-level module (Enc/Dec control)
│   ├── key_expansion.v   # AES Key Schedule logic
│   ├── rounds.v          # Rounds 1-9 transformation logic
│   └── last_round.v      # Final round logic (no MixColumns)
├── tb/
│   ├── aes_tb.v          # Testbench with NIST test vectors
│   └── test_vectors.txt  # Input/Output data for verification
├── simulations/          # Waveform screenshots (GTKWave/ModelSim)
└── docs/                 # Detailed architecture report (PDF)
```

## Verification
The design was verified using standard NIST test vectors.
- **Tools**: ModelSim / Vivado / Icarus Verilog.
- **Validation**: Waveforms confirm bit-perfect results for both encryption and decryption paths.

## How to Run
1. Clone the repository.
2. Load the files in `rtl/` into your simulator.
3. Run the testbench `tb/aes_tb.v`.
4. Observe the `cipher_text` and `plain_text` signals match the expected vectors.

---
**Author**: Ansh Khanpara
**Domain**: RTL Design | VLSI Architectures

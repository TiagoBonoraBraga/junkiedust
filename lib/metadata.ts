import fs from "fs";
import NodeID3 from "node-id3"; // Importa a biblioteca para manipular tags ID3

/**
 * Adiciona metadados a um arquivo MP3.
 * @param filePath - Caminho para o arquivo MP3.
 * @param metadata - Objeto contendo os metadados a serem adicionados.
 * @returns Promise<void>
 */
export async function writeMetadata(
  filePath: string,
  metadata: NodeID3.Tags
): Promise<void> {
  try {
    // Verifica se o arquivo existe
    if (!fs.existsSync(filePath)) {
      throw new Error(`Arquivo não encontrado: ${filePath}`);
    }

    // Escreve os metadados no arquivo MP3
    const success = NodeID3.write(metadata, filePath);

    if (!success) {
      throw new Error("Falha ao escrever os metadados no arquivo.");
    }

    console.log("Metadados escritos com sucesso!");
  } catch (error) {
    console.error("Erro ao escrever metadados:", error);
  }
}

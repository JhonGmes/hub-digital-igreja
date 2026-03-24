const QRCode = require('qrcode');

/**
 * Gera um QR Code em base64 a partir de uma chave PIX.
 * @param {string} chavePix - A chave PIX para gerar o QR Code.
 * @returns {Promise<string>} - QR Code em formato base64 (data URL).
 */
async function gerarQRCode(chavePix) {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(chavePix, {
      width: 300,
      margin: 2,
      color: {
        dark: '#1a1a2e',
        light: '#ffffff',
      },
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
    throw new Error('Não foi possível gerar o QR Code');
  }
}

module.exports = { gerarQRCode };

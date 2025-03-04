import React from 'react'

import Image from 'next/image'

export default function Purpose() {
  return (
    <section className="bg-josiane-gold-100 scroll-mt-28 pb-16" id="purpose">
      <div className="container mx-auto grid grid-cols-1 items-center space-y-8 px-4 py-16 lg:grid-cols-[1fr_1fr] lg:space-y-0">
        <div className="mx-auto max-w-3xs drop-shadow-xl lg:mx-0 lg:max-w-lg">
          <Image
            src="/images/josi_purpose.png"
            alt="Mulher sentada na cadeira"
            width={600}
            height={10}
            quality={100}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div>
          <h1 className="text-josiane-wine-400/80 font-montserrat text-2xl font-semibold uppercase lg:text-4xl">
            Meu propósito
          </h1>

          <div className="space-y-6 pt-6 text-justify">
            <p className="max-w-lg text-sm font-light text-gray-500">
              Graduada em Direito pelo Centro Universitário Regional da Bahia -
              UNIRB; Advogada inscrita nos quadros da OAB/BA sob o nº 65.347,
              atuante na seara Trabalhista e Previdenciária desde 2019;
              atualmente Conciliadora no Tribunal de Justiça do Estado da Bahia,
              presta consultoria e assessoria para pessoas físicas e jurídicas
              igualmente em Direito Civil, Direito das Famílias e Sucessões,
              Direito do Consumidor em todo o território nacional, dispõe de
              importantes parcerias nas mais diversas áreas jurídicas, o que
              viabiliza o atendimento integral ao cliente garantindo agilidade
              de atendimento através de serviços de consulta virtual ou
              presencial pautada sempre na ética e na busca por justiça.
            </p>
            <p className="max-w-lg text-sm font-light text-gray-500">
              Proporciono uma representação jurídica personalizada para cada
              cliente, abrangendo todas as áreas do direito. Minha missão é
              oferecer soluções eficazes e orientação compassiva, defendendo
              seus interesses com total dedicação para alcançar resultados
              consistentes e duradouros. Independentemente do desafio legal que
              você enfrente, meu compromisso é assegurar que seus direitos sejam
              protegidos, proporcionando a assistência legal competente e ética
              que você merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

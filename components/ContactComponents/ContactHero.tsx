"use client";

import { Phone, Mail, MapPin, Building2 } from "lucide-react";

export default function ContactHero() {
  const contacts = [
    {
      name: "Marko Fio",
      title: "direktor / general manager",
      gsm: "+385 (0)98 447 757",
      email: "marko.fio@dicroic.com",
      delay: 100,
    },
    {
      name: "Slaven Kutlača",
      title: "financijski direktor / sales manager",
      gsm: "+385 (0)98 287 676",
      email: "slaven.kutlaca@dicroic.com",
      delay: 200,
    },
    {
      name: "Damir Điko",
      title: "tehnički direktor / technical director",
      gsm: "+385 (0)98 250 040",
      email: "damir.djiko@dicroic.com",
      delay: 300,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Naši kontakti
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Uvijek smo dostupni za savjete, ponude i realizaciju vaših projekata.
          </p>
          <div className="h-1 w-20 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

          {/* LEFT—Contacts + Company Info */}
          <div className="space-y-16">

            {/* Contact Cards Grid */}
            <div className="grid gap-10 md:grid-cols-2">
              {contacts.map((person) => (
                <div
                  key={person.name}
                  data-aos="fade-up"
                  data-aos-delay={person.delay}
                  className="relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-border/50 bg-card/90 backdrop-blur p-8 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-700 ease-out hover:-translate-y-2"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-red-500/10 blur-2xl opacity-0 group-hover:opacity-40 transition duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-black">{person.name}</h3>
                    <p className="text-primary font-semibold mt-1">{person.title}</p>

                    <div className="mt-6 space-y-4">
                      <a
                        href={`tel:${person.gsm.replace(/[\s()]/g, "")}`}
                        className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">GSM {person.gsm}</span>
                      </a>

                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors break-all"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">{person.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Company Information (Full Width) */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="md:col-span-2 rounded-3xl border border-border/50 bg-card/90 backdrop-blur p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-black">Dicroic d.o.o. - Split</h3>
                    <p className="text-lg font-semibold text-primary mt-1">
                      TVRTKA ZA PROJEKTIRANJE, MONTAŽU I ODRŽAVANJE<br />
                      U PODRUČJU ELEKTROTEHNIKE
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-foreground/90">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>Split</strong><br />
                      Kranjčevićeva 13
                    </span>
                  </p>

                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>
                      Tel.{" "}
                      <a href="tel:+38521539320" className="hover:text-primary">
                        021 539 320
                      </a>
                      <br />
                      Tel./Fax.{" "}
                      <a href="tel:+38521530307" className="hover:text-primary">
                        021 530 307
                      </a>
                    </span>
                  </p>

                  <a
                    href="mailto:dicroic@dicroic.com"
                    className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">dicroic@dicroic.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT—Google Maps */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-border/50 aspect-video lg:aspect-4/3 lg:sticky lg:top-32"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.668768069194!2d16.4547931!3d43.509245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e1b0a8fd7a5%3A0xd61704fac0a710ad!2sDICROIC%20d.o.o.!5e0!3m2!1shr!2shr!4v1764581075954!5m2!1shr!2hr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Dicroic d.o.o. lokacija"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none shadow-inner shadow-black/10 rounded-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import util from '../lib/util';

import { useState } from 'react';

const ContactSection = () => {
   return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          looking for a person  having all these skills? contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 min-h-[60vh]  ">
          <div className="flex flex-col justify-center items-center space-y-8 h-full ">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="vasutrehan69@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vasutrehan69@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8130230060
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <mapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Faridabad,haryana
                  </a>
                </div>
              </div>
            </div>

          </div>

 
        </div>
      </div>
    </section>
  );
}

export default ContactSection
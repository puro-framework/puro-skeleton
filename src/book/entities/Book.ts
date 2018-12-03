/**
 * @file entities/Book.ts
 *
 * Copyright (C) 2018 | Giacomo Trudu aka `Wicker25`
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Schema } from '@puro/core';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class Book {
  @Schema()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Schema()
  @Column({ length: 128 })
  title!: string;

  @Schema()
  @Column({ length: 256 })
  description!: string;

  @Column()
  createdOn!: Date;

  @Column({ nullable: true })
  modifiedOn!: Date;

  @BeforeInsert()
  updateCreatedOn() {
    this.createdOn = new Date();
  }

  @BeforeUpdate()
  updateModifiedOn() {
    this.modifiedOn = new Date();
  }
}
